function DropDown() {
      var x = document.getElementById('myDropdown');
      if (x.style.display === 'block') {
          x.style.display = 'none';
      } else {
          x.style.display = 'block';
      }
      document.getElementById("mediaDropdown").style.display='none';
      document.getElementById("notifications-list").style.display='none';
  }

function messageDropDown() {
      var x = document.getElementById('notifications-list');
      if (x.style.display === 'block') {
          x.style.display = 'none';
      } else {
          x.style.display = 'block';
      }
      document.getElementById("myDropdown").style.display='none';
      document.getElementById("mediaDropdown").style.display='none';
  }

function mediaDropDown() {
      var x = document.getElementById('mediaDropdown');
      if (x.style.display === 'block') {
          x.style.display = 'none';
      } else {
          x.style.display = 'block';
      }
      document.getElementById("myDropdown").style.display='none';
      document.getElementById("notifications-list").style.display='none';
  }