
        function deleteTile(listNum) {
          var tileList = document.getElementsByClassName("tile");
          tileList[listNum].style.display = "none";
        }

        function reset() {
            var tileIndex;
            var tileList = document.getElementsByClassName("tile");
            for (tileIndex=0; tileIndex < tileList.length; tileIndex++) {
                tileList[tileIndex].style.display = "inline-block";
            }
        }

        function clearTiles() {
            var tileIndex;
            var tileList = document.getElementsByClassName("tile");
            for (tileIndex=0; tileIndex < tileList.length; tileIndex++) {
                tileList[tileIndex].style.display = "none";
            }
        }


        var slide = 0;
        carousel();

        function carousel() {
            var i;
            var allSlides = document.getElementsByClassName("image");
            for (i=0; i < allSlides.length; i++) {
                allSlides[i].style.display = "none";
            }
            slide++;
            if (slide > allSlides.length) {slide = 1}
            allSlides[slide-1].style.display = "block";
            setTimeout(carousel, 3000);
            }

        function changeText(para,edit,button) {
            document.getElementById(para).style.display = "none";
            document.getElementById(edit).style.display = "inline-block";
            document.getElementById(button).style.display = "inline-block";
        }

        function submit(edit,button,para) {
            var replace = document.getElementById(edit).value;
            document.getElementById(edit).style.display = "none";
            document.getElementById(button).style.display = "none";
            document.getElementById(para).innerHTML = replace;
            document.getElementById(para).style.display = "inline-block";
        }
        
