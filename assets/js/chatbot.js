// AI Chatbot Logic
class HRChatbot {
  constructor() {
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.inputField = document.getElementById('chatbot-input');
    this.sendButton = document.getElementById('chatbot-send');
    this.toggleButton = document.getElementById('chatbot-toggle');
    this.closeButton = document.getElementById('chatbot-close');
    this.chatWindow = document.getElementById('chatbot-window');

    this.initializeEventListeners();
    this.setupQuickQuestions();
  }

  initializeEventListeners() {
    // Toggle chat window
    this.toggleButton.addEventListener('click', () => this.toggleChat());
    this.closeButton.addEventListener('click', () => this.toggleChat());

    // Send message
    this.sendButton.addEventListener('click', () => this.sendMessage());
    this.inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });
  }

  setupQuickQuestions() {
    // Event delegation for quick question buttons
    this.messagesContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-question-btn')) {
        const question = e.target.getAttribute('data-question');
        this.inputField.value = question;
        this.sendMessage();
      }
    });
  }

  toggleChat() {
    this.chatWindow.classList.toggle('active');
    this.toggleButton.classList.toggle('hidden');

    if (this.chatWindow.classList.contains('active')) {
      this.inputField.focus();
    }
  }

  async sendMessage() {
    const message = this.inputField.value.trim();

    if (!message) return;

    // Clear input
    this.inputField.value = '';

    // Add user message
    this.addMessage(message, 'user');

    // Show typing indicator
    this.showTypingIndicator();

    // Simulate AI thinking time
    await this.delay(1000);

    // Hide typing indicator
    this.hideTypingIndicator();

    // Get AI response
    const response = this.getAIResponse(message);
    this.addMessage(response, 'bot');

    // Scroll to bottom
    this.scrollToBottom();
  }

  addMessage(content, type = 'bot') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = type === 'bot' ? '<i class="bi bi-robot"></i>' : '<i class="bi bi-person-fill"></i>';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = content;

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);

    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = '<i class="bi bi-robot"></i>';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;

    typingDiv.appendChild(avatarDiv);
    typingDiv.appendChild(contentDiv);

    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getAIResponse(question) {
    const lowerQuestion = question.toLowerCase();

    // Greeting patterns
    if (this.matchPattern(lowerQuestion, ['halo', 'hai', 'hello', 'hi', 'hei'])) {
      return `<p>Halo! Senang bertemu dengan Anda. Saya di sini untuk membantu Anda mengenal <strong>${profileData.personalInfo.name}</strong> lebih baik. Ada yang ingin Anda ketahui?</p>`;
    }

    // Personal info patterns
    if (this.matchPattern(lowerQuestion, ['nama', 'siapa', 'who', 'profile'])) {
      return `<p>Perkenalkan, nama lengkapnya adalah <strong>${profileData.personalInfo.name}</strong>, biasa dipanggil <strong>${profileData.personalInfo.nickname}</strong>.</p>
              <p>Beliau adalah seorang <strong>${profileData.personalInfo.title}</strong> dengan pengalaman <strong>${profileData.personalInfo.yearsOfExperience} tahun+</strong> di bidang programming.</p>`;
    }

    // Experience patterns
    if (this.matchPattern(lowerQuestion, ['pengalaman', 'kerja', 'experience', 'pekerjaan', 'karir'])) {
      let response = `<p><strong>Pengalaman Kerja ${profileData.personalInfo.name}:</strong></p><ul>`;
      profileData.experience.forEach(exp => {
        response += `<li><strong>${exp.position}</strong> di ${exp.company} (${exp.period})</li>`;
      });
      response += `</ul><p>Total pengalaman: <strong>${profileData.personalInfo.yearsOfExperience} tahun</strong> di <strong>${profileData.personalInfo.companiesWorkedWith} perusahaan</strong>.</p>`;
      return response;
    }

    // Current job patterns
    if (this.matchPattern(lowerQuestion, ['sekarang', 'current', 'saat ini', 'posisi sekarang'])) {
      const currentJob = profileData.experience[0];
      return `<p>Saat ini Farij bekerja sebagai <strong>${currentJob.position}</strong> di <strong>${currentJob.company}</strong> sejak <strong>${currentJob.period}</strong>.</p>
              <p><strong>Tanggung jawab:</strong></p>
              <ul>${currentJob.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>`;
    }

    // Skills patterns
    if (this.matchPattern(lowerQuestion, ['skill', 'kemampuan', 'teknologi', 'tech stack', 'keahlian'])) {
      let response = `<p><strong>Skills & Expertise:</strong></p>`;
      const sk = profileData.skills;
      response += `<p><strong>Bahasa:</strong> ${sk.languages.join(', ')}</p>`;
      response += `<p><strong>Frameworks:</strong> ${sk.frameworks.join(', ')}</p>`;
      response += `<p><strong>Databases:</strong> ${sk.databases.join(', ')}</p>`;
      response += `<p><strong>Tools & DevOps:</strong> ${sk.tools.join(', ')}</p>`;
      response += `<p><strong>Security & Cloud:</strong> ${sk.securityCloud.join(', ')}</p>`;
      return response;
    }

    // Education patterns
    if (this.matchPattern(lowerQuestion, ['pendidikan', 'kuliah', 'education', 'universitas', 'kampus', 'sarjana'])) {
      const edu = profileData.education;
      return `<p><strong>Pendidikan:</strong></p>
              <p><strong>${edu.degree}</strong><br>
              ${edu.university} (${edu.period})<br>
              IPK: <strong>${edu.gpa}</strong></p>
              <p>${edu.focus}</p>`;
    }

    // Projects/Portfolio patterns
    if (this.matchPattern(lowerQuestion, ['project', 'portfolio', 'proyek', 'karya'])) {
      let response = `<p><strong>Beberapa Project yang Pernah Dikerjakan:</strong></p><ul>`;
      profileData.projects.slice(0, 4).forEach(project => {
        response += `<li><strong>${project.name}</strong> - ${project.description}</li>`;
      });
      response += `</ul><p>Lihat semua project di section <strong>Projects</strong>.</p>`;
      return response;
    }

    // Contact patterns
    if (this.matchPattern(lowerQuestion, ['kontak', 'hubungi', 'contact', 'email', 'phone', 'telepon', 'whatsapp'])) {
      const info = profileData.personalInfo;
      return `<p><strong>Informasi Kontak:</strong></p>
              <ul>
                <li><strong>Email:</strong> ${info.email}</li>
                <li><strong>Phone/WhatsApp:</strong> ${info.phone}</li>
                <li><strong>LinkedIn:</strong> <a href="${info.linkedin}" target="_blank">Profile LinkedIn</a></li>
                <li><strong>Instagram:</strong> <a href="${info.instagram}" target="_blank">@farij_ariefqy</a></li>
                <li><strong>Lokasi:</strong> ${info.location}</li>
              </ul>`;
    }

    // Salary/Gaji patterns
    if (this.matchPattern(lowerQuestion, ['gaji', 'salary', 'expected salary', 'penghasilan'])) {
      return `<p>Untuk informasi mengenai ekspektasi gaji atau kompensasi, silakan hubungi langsung Farij melalui:</p>
              <ul>
                <li>Email: ${profileData.personalInfo.email}</li>
                <li>WhatsApp: ${profileData.personalInfo.phone}</li>
              </ul>`;
    }

    // Location/Lokasi patterns
    if (this.matchPattern(lowerQuestion, ['lokasi', 'location', 'domisili', 'tinggal', 'dimana'])) {
      return `<p>Farij berdomisili di <strong>${profileData.personalInfo.location}</strong>.</p>
              <p>Farij terbuka untuk bekerja secara:</p>
              <ul>
                ${profileData.workPreference.location.map(loc => `<li>${loc}</li>`).join('')}
              </ul>`;
    }

    // Availability patterns
    if (this.matchPattern(lowerQuestion, ['tersedia', 'available', 'availability', 'mulai', 'kapan'])) {
      return `<p><strong>Status:</strong> ${profileData.availability}</p>
              <p><strong>Tipe Pekerjaan yang Diminati:</strong></p>
              <ul>
                ${profileData.workPreference.type.map(type => `<li>${type}</li>`).join('')}
              </ul>`;
    }

    // Strengths/Kelebihan patterns
    if (this.matchPattern(lowerQuestion, ['kelebihan', 'strengths', 'keunggulan', 'kenapa', 'mengapa'])) {
      return `<p><strong>Keunggulan & Kelebihan:</strong></p>
              <ul>
                ${profileData.strengths.map(str => `<li>${str}</li>`).join('')}
              </ul>
              <p><em>"${profileData.summary.split('.').slice(-2).join('.')}"</em></p>`;
    }

    // Certification patterns
    if (this.matchPattern(lowerQuestion, ['sertifikat', 'sertifikasi', 'certif', 'aws', 'ec-council', 'kursus', 'course'])) {
      let response = `<p><strong>Courses & Certifications:</strong></p><ul>`;
      profileData.certifications.forEach(c => {
        response += `<li><strong>${c.name}</strong> — ${c.issuer} (${c.date})</li>`;
      });
      response += `</ul>`;
      return response;
    }

    // Java specific patterns
    if (this.matchPattern(lowerQuestion, ['java', 'spring', 'spring boot'])) {
      const javaExp = profileData.experience.filter(exp =>
        exp.technologies.includes('Java') || exp.technologies.includes('Spring MVC')
      );
      return `<p>Java adalah <strong>keahlian utama</strong> Farij, dipakai di sektor perbankan (BNI), asuransi, dan industri.</p>
              <p><strong>Pengalaman Java:</strong></p>
              <ul>
                ${javaExp.map(exp => `<li>${exp.position} di ${exp.company}</li>`).join('')}
              </ul>
              <p><strong>Teknologi Java yang dikuasai:</strong> Spring Boot, Spring MVC, REST API, Maven, Gradle, SQL Server, Android (Java)</p>`;
    }

    // PHP/Laravel specific patterns
    if (this.matchPattern(lowerQuestion, ['php', 'laravel'])) {
      const phpExp = profileData.experience.filter(exp =>
        exp.technologies.includes('PHP') || exp.technologies.includes('Laravel')
      );
      return `<p>Farij berpengalaman membangun sistem enterprise dengan <strong>PHP & Laravel</strong>.</p>
              <p><strong>Pengalaman Laravel:</strong></p>
              <ul>
                ${phpExp.map(exp => `<li>${exp.position} di ${exp.company}</li>`).join('')}
              </ul>
              <p><strong>Project Laravel:</strong> ERP System, E-Tender System, Recruitment Web Application</p>`;
    }

    // Android patterns
    if (this.matchPattern(lowerQuestion, ['android', 'mobile'])) {
      return `<p>Farij memiliki pengalaman <strong>Android Native (Java)</strong> saat onsite di BNI.</p>
              <p><strong>Project Android:</strong></p>
              <ul>
                <li>TapCash SDK untuk integrasi partner dengan platform e-money BNI</li>
                <li>Rebuild aplikasi TapCash Go (NFC e-money) dari nol</li>
                <li>System Integration Testing (SIT) aplikasi Android & iOS</li>
              </ul>`;
    }

    // CV/Resume download
    if (this.matchPattern(lowerQuestion, ['cv', 'resume', 'download'])) {
      return `<p>CV lengkap Farij bisa diunduh di sini: <a href="${profileData.personalInfo.cvUrl}" target="_blank">Download CV (PDF)</a>. Atau hubungi langsung melalui:</p>
              <ul>
                <li>Email: ${profileData.personalInfo.email}</li>
                <li>WhatsApp: ${profileData.personalInfo.phone}</li>
              </ul>`;
    }

    // Default response with suggestions
    return `<p>Maaf, saya tidak yakin bagaimana menjawab pertanyaan tersebut. Berikut beberapa topik yang bisa saya bantu:</p>
            <div class="quick-questions">
              <button class="quick-question-btn" data-question="Apa pengalaman kerja Farij?">Pengalaman Kerja</button>
              <button class="quick-question-btn" data-question="Apa saja skill yang dikuasai?">Skills & Teknologi</button>
              <button class="quick-question-btn" data-question="Project apa yang pernah dikerjakan?">Portfolio</button>
              <button class="quick-question-btn" data-question="Bagaimana latar belakang pendidikan?">Pendidikan</button>
              <button class="quick-question-btn" data-question="Bagaimana cara menghubungi?">Kontak</button>
            </div>`;
  }

  matchPattern(text, keywords) {
    return keywords.some(keyword => text.includes(keyword));
  }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new HRChatbot();
});
