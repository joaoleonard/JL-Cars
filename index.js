(function(DOM) {
    'use strict';

    function app() {
        return {
            init: function init() {
                this.companyInfo();
                this.handleRegisterCar();
            },

            companyInfo: function companyInfo() {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'company.json', true);
                ajax.send();
                ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
            },

            getCompanyInfo: function getCompanyInfo() {
                if (this.readyState === 4 && this.status === 200) {
                    var data = JSON.parse(this.responseText);
                    var $companyName = new DOM('[data-js="company-name"]');
                    var $companyPhone = new DOM('[data-js="company-phone"]');
                    
                    $companyName.get()[0].textContent = data.name;
                    $companyPhone.get()[0].textContent = data.phone;
                }
            },

            handleRegisterCar: function handleRegisterCar() {
                new DOM('[data-js="submit-form"]').on('submit', this.handleSubmit);
            },

            handleSubmit: function handleSubmit(event) {
                event.preventDefault();
                var $table = new DOM('[data-js="table"]').get()[0];
                $table.appendChild(app().newCar());
            },

            newCar: function newCar() {
                var $fragment = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $tdImg = document.createElement('td');
                var $img = document.createElement('img');
                var $tdBrand = document.createElement('td');
                var $tdYear = document.createElement('td');
                var $tdPlate = document.createElement('td');
                var $tdColor = document.createElement('td');
                
                $img.setAttribute('src', new DOM('[data-js="image"]').get()[0].value);
                $tdImg.appendChild($img);
                
                $tdBrand.textContent = new DOM('[data-js="brand"]').get()[0].value;
                $tdYear.textContent = new DOM('[data-js="year"]').get()[0].value;
                $tdPlate.textContent = new DOM('[data-js="plate"]').get()[0].value;
                $tdColor.textContent = new DOM('[data-js="color"]').get()[0].value;
                
                $tr.appendChild($tdImg);
                $tr.appendChild($tdBrand);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);
                
                if (app().checkInputImg($img) || app().checkTextContent($tdBrand) || app().checkTextContent($tdYear) || 
                    app().checkTextContent($tdPlate) || app().checkTextContent($tdColor))
                    return alert('Preencha todos os campos');
                alert('Novo Veículo Registrado')
                return $fragment.appendChild($tr);
            },

            checkTextContent: function checkTextContent(element) {
                return element.textContent === '';
            },

            checkInputImg: function checkInputImg(element) {
                return element.getAttribute('src') === '';
            }
        };
    }

    app().init();
  
  })(DOM);