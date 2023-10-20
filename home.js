////////
//title/
////////   // Fetch the JSON file
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
function get_logo() {
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
get_logo();
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
