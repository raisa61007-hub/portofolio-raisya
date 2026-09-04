
const toggleBtn = document.getElementById('toggle-theme');
const htmlEl = document.documentElement;
 
toggleBtn.addEventListener('click', () => {
  const isDark = htmlEl.getAttribute('data-theme') === 'dark';
  htmlEl.setAttribute('data-theme', isDark ? 'light' : 'dark');
  toggleBtn.textContent = isDark ? '🌙' : '☀️';
});

const skills = ['Menggambar Digital', 'HTML', 'CSS', 'JS', 'Membuat Sketsa'];
const skillsContainer = document.querySelector('.skills');
 
skills.forEach((skill) => {
  const skillChip = document.createElement('span');
  skillChip.classList.add('skill-chip');
  skillChip.textContent = skill;
  skillsContainer.appendChild(skillChip);
});


import { Client, TablesDB } from "https://cdn.jsdelivr.net/npm/appwrite@20.0.0/+esm";

// Ganti dengan data proyek Appwrite kamu
const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1') 
  .setProject('6a9a3ec20028db9526dd');

const tablesDB = new TablesDB(client);

async function tampilkanProyek() {
  const container = document.getElementById('proyek-container');
  try {
    const response = await tablesDB.listRows({
      databaseId: '6a9a466c000914b51c77',
      tableId: '6a9a4695003ad536e464',
    });

    container.innerHTML = ''; // kosongkan teks "Memuat data proyek..."

    response.rows.forEach((proyek) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${proyek.judul}</h3>
        <p>${proyek.deskripsi}</p>
        ${proyek.gambar_url ? `<img src="${proyek.gambar_url}" alt="${proyek.judul}">` : ''}
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Gagal memuat data:', error);
    container.innerHTML = '<p>Gagal memuat data proyek 😢</p>';
  }
}

tampilkanProyek();





