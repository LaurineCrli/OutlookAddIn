
        // Prévisualiser le contenu de l'email
        document.getElementById("previewButton").addEventListener("click", function() {
          var subject = document.getElementById("emailSubject").value;
          var body = document.getElementById("emailBody").value;
          document.getElementById("previewContent").innerHTML = `
              <h3>${subject}</h3>
              <p>${body}</p>
          `;
      });

      // Envoyer l'email
      document.getElementById("emailForm").addEventListener("submit", function(event) {
          event.preventDefault();
          var subject = document.getElementById("emailSubject").value;
          var body = document.getElementById("emailBody").value;

          // Logique d'envoi d'email (ici, simule l'envoi)
          alert("Email envoyé avec succès !\n\nSujet: " + subject + "\nCorps: " + body);
      });

      // Actions rapides
      document.getElementById("replyButton").addEventListener("click", function() {
          alert("Répondre à l'email");
      });
      document.getElementById("forwardButton").addEventListener("click", function() {
          alert("Transférer l'email");
      });
      document.getElementById("markImportantButton").addEventListener("click", function() {
          alert("Marquer comme important");
      });

      // Sauvegarder en brouillon
      document.getElementById("saveDraftButton").addEventListener("click", function() {
          var subject = document.getElementById("emailSubject").value;
          var body = document.getElementById("emailBody").value;
          alert("Brouillon sauvegardé avec succès !\n\nSujet: " + subject + "\nCorps: " + body);
      });

      // Priorité de l'email
      document.getElementById("saveDraftButton").addEventListener("click", function() {
          var priority = document.getElementById("prioritySelect").value;
          alert("Priorité sélectionnée : " + priority);
      });

      // Message d'absence
      document.getElementById("setOutOfOfficeButton").addEventListener("click", function() {
          alert("Message d'absence activé !");
      });