// Section Navigation
function showSection(id) {
  document.querySelectorAll('.content-section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Member Add/Delete Feature
const memberForm = document.getElementById('memberForm');
const memberList = document.getElementById('memberList');

memberForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('memberName').value;
  const email = document.getElementById('memberEmail').value;
  
  const li = document.createElement('li');
  li.innerHTML = `${name} (${email}) <button onclick="removeMember(this)">Delete</button>`;
  memberList.appendChild(li);
  
  memberForm.reset();
});

function removeMember(btn) {
  btn.parentElement.remove();
}
