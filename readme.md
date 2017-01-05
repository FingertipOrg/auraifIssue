Issue: Lightning throws error  "Cannot read property 'childNodes' of null]"

Description: We use mutiple aura:if  tags to render four buttons on different conditions. When we click on one button the controller code change the condition and so the next button will be rendered. At a time two buttons are dislayed. Problem happens when we click on first button and then click on second button. We have used only salesforce native lightning elements and the issue is consistently happening.

Steps to reproduce

 1: open the application
 2: Click on the "Change to View 1" button
 3: Click on the "Single Window" Button
 
 Javascript error will be thrown showing "Cannot read property 'childNodes' of null]"