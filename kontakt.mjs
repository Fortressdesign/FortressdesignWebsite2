    
      // Function to toggle the menu when clicking #responsive
      document
        .getElementById("responsive")
        .addEventListener("click", function () {
          document.getElementById("menuList").classList.toggle("show-menu");
        });
    



////////
//title/
//////// 

        const imageUrl = 'https://fortressdesign.de/img/castle.jpg';

        // Function to set a fixed background image
        function setFixedBackgroundImage() {
            document.body.style.backgroundImage = `url('${imageUrl}')`;
            document.body.style.backgroundSize = 'cover 100%';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.backgroundRepeat = 'no-repeat';
        }

        // Call the function to set the fixed background image
        setFixedBackgroundImage();
// Fetch the JSON file
        fetch('https://raw.githubusercontent.com/Fortressdesign/FortressdesignWebsite2/main/data.json')
            .then(response => response.json())
            .then(data => {
                // Set the document.title to the value of the 'title' property in the JSON
                document.title = data.title;
            })
            .catch(error => {
                // Handle any errors that occur during the fetch
                console.error('Error fetching JSON:', error);
            });
/////////
//page//
/////////
// Function to fetch and display the "startseite" content from data.json
        function fetchAndDisplayStartseite() {
            fetch('https://raw.githubusercontent.com/Fortressdesign/FortressdesignWebsite2/main/data.json')
                .then(response => response.json())
                .then(data => {
                    // Get the "startseite" content from the JSON data
                    const startseite = data.seiten.find(page => page.titel === "Referenzen");
                    if (startseite) {
                        document.getElementById('page').innerHTML = startseite.inhalt;
                    }
                })
                .catch(error => {
                    console.error('Error fetching data.json:', error);
                });
        }

        // Call the function to fetch and display the "startseite" content
        fetchAndDisplayStartseite();
 // Function to fetch and display the "title" from data.json
        function fetchAndDisplayTitle() {
            fetch('https://raw.githubusercontent.com/Fortressdesign/FortressdesignWebsite2/main/data.json')
                .then(response => response.json())
                .then(data => {
                    // Get the "title" property from the JSON data
                    const title = data.title;
                    // Display the title in the #logo element
                    document.getElementById('logo').textContent = title;
                })
                .catch(error => {
                    console.error('Error fetching data.json:', error);
                });
        }

        // Add an event listener to execute after the page has loaded
        window.addEventListener('load', function() {
            fetchAndDisplayTitle();
        });

////////
//logo//
////////

const jsonData = {
  title: "Fortressdesign",
  beschreibung:
    "Willkommen auf unserer Webseite. Wir bieten verschiedene Dienstleistungen an.",
  // ... (other properties)
};

// Function to get and display the "title" in #logo
function displayTitleInLogo() {
  // Get the "title" property from the JSON data
  const title = jsonData.title;
  // Display the title in the #logo element
  document.getElementById("logo").textContent = title;
}

// Call the function to display the title
displayTitleInLogo();

function get_logo() {
        // Call the function to fetch and display the JSON data
        fetchDataJson('https://raw.githubusercontent.com/Fortressdesign/FortressdesignWebsite2/main/data.json');// Function to fetch and display the JSON data
        function fetchDataJson() {
            fetch('')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Display the JSON data in the #jsonData element
                    document.getElementById('logo').textContent = JSON.stringify(data, null, 2);
                })
                .catch(error => {
                    console.error('Error fetching data.json:', error);
                });
        }

        // Call the function to fetch and display the JSON data
        fetchDataJson();
}
 window.addEventListener('load', function() {
            get_logo();
        });
////////
//menu//
////////
function get_menu() {
  fetch(
    "https://raw.githubusercontent.com/Fortressdesign/FortressdesignWebsite2/main/data.json"
  ) // Replace 'data.json' with the actual URL or path to your JSON file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const menuData = data.menu;
      const menuList = document.getElementById("menuList");

      if (menuData) {
        menuData.forEach((item) => {
          const listItem = document.createElement("li");
          const link = document.createElement("a");
          link.textContent = item.name;
          link.href = item.url;
          listItem.appendChild(link);
          menuList.appendChild(listItem);
        });
      } else {
        console.log("Menu data not found in the JSON data.");
      }
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });
}
get_menu();
function get_style() {
  fetch(
    "https://raw.githubusercontent.com/Fortressdesign/FortressdesignWebsite2/main/data.json"
  ) // Replace 'data.json' with the actual URL or path to your JSON file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const style = data.style;

      if (style) {
        // Create a <style> tag
        const styleTag = document.createElement("style");

        // Set the content of the <style> tag to the "style" value from the JSON data
        styleTag.textContent = style;

        // Append the <style> tag to the document's <head>
        document.head.appendChild(styleTag);
      } else {
        console.log("Style not found in the JSON data.");
      }
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });
}
function get_phone() {
  fetch("https://raw.githubusercontent.com/Fortressdesign/FortressdesignWebsite2/main/data.json") // Ersetzen Sie 'data.json' durch die tatsächliche URL oder den Pfad Ihrer JSON-Datei
    .then((response) => {
      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht erfolgreich");
      }
      return response.json();
    })
    .then((data) => {
      const telefon = data.kontakt.telefon;

      if (telefon) {
        const telefonContainer = document.getElementById("phone");
        telefonContainer.textContent = "" + telefon;
      } else {
        console.log("Telefonnummer wurde in den JSON-Daten nicht gefunden.");
      }
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen oder Analysieren von JSON:", error);
    });
}
get_phone();
