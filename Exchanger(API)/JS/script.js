    function exchange() {
        
        let input_box = document.getElementById("input_num").value;
        let currency_select = document.getElementById("currency_syl");
        let selected_currency = currency_select.value;

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === this.DONE && this.status === 200) {

                let result = JSON.parse(this.responseText);
                let answer = document.getElementById("result");
                let target_currency = "USD"; 
                let rate = result.rates[target_currency];

                if (isNaN(input_box) || input_box === "") {
                    answer.innerHTML = "Please enter a valid number.";
                    return;
                }

                if (rate) {
                    let converted = (input_box * rate).toFixed(2);
                    answer.innerHTML = `Converted Amount: ${converted} ${target_currency}`;
                } else {
                    answer.innerHTML = "Currency not found.";
                }
            }
        };


        xhr.open("GET", `https://api.exchangerate-api.com/v4/latest/${selected_currency}`, true);
        xhr.send();
    }


    function toggle(){
        document.body.classList.toggle("light");
    }

    function reSizeFont(){
        
        // let parent = document.getElementById("parent-div");
        let screenWidth = window.innerWidth;
        let select_font_size = document.getElementById("select"); 

            if (screenWidth < 400) {
                select_font_size.style.fontSize = "8px";
            }
            
            else if (screenWidth < 600){
                select_font_size.style.fontSize = "10px";
            }
            
            else {
                select_font_size.style.fontSize = "15px";
            }
        }       

        reSizeFont();

        window.addEventListener("resize", reSizeFont);


    