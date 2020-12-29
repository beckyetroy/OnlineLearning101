$(document).ready(function() {

$('#DesktopFolders').hover(function() {
     $(this).fadeTo(500, 0.65);
   },
   function() {
     $(this).fadeTo(500, 1);
   });

$('#DesktopShortcuts').hover(function() {
     $(this).fadeTo(500, 0.65);
   },
   function() {
     $(this).fadeTo(500, 1);
   });

$('#classTimetable').hover(function() {
    $('#classTimetable').attr('src', 'images/classTimetable2.jpg');
   },
   function() {
    $('#classTimetable').attr('src', 'images/classTimetable.jpg');
   });

$('#oneDrive').hover(function() {
    $('#oneDrive').attr('src', 'images/OneDrive2.jpg');
   },
   function() {
    $('#oneDrive').attr('src', 'images/OneDrive.jpg');
   });

$('#camScanner').hover(function() {
    $('#camScanner').attr('src', 'images/CamScanner2.jpg');
   },
   function() {
    $('#camScanner').attr('src', 'images/CamScanner.jpg');
   });

$('#grammarly').hover(function() {
    $('#grammarly').attr('src', 'images/Grammarly2.jpg');
   },
   function() {
    $('#grammarly').attr('src', 'images/Grammarly.jpg');
   });

$('.breakingUpTheDay').hover(function() {
     $(this).fadeTo(500, 0.65);
   },
   function() {
     $(this).fadeTo(500, 1);
   });

$('.leavingCollege').hover(function() {
     $(this).fadeTo(500, 0.65);
   },
   function() {
     $(this).fadeTo(500, 1);
   });

$('.settingUpWorkspace').hover(function() {
     $(this).fadeTo(500, 0.65);
   },
   function() {
     $(this).fadeTo(500, 1);
   });

$('.stayingConnected').hover(function() {
     $(this).fadeTo(500, 0.65);
   },
   function() {
     $(this).fadeTo(500, 1);
   });

$('.lunchBreak').hover(function() {
     $(this).fadeTo(500, 0.65);
   },
   function() {
     $(this).fadeTo(500, 1);
   });
});