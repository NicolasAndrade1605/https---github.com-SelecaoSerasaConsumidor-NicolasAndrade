import { describe, it, before, after } from 'mocha';
import * as chai from 'chai';
const { expect } = chai;
import { getDriver as defaultGetDriver } from '../helpers/driver.mjs';
import axios from 'axios';
import {generateRandomName} from '../helpers/randomGenerate.spec.mjs';
import { generateRandomPassword } from '../helpers/randomGenerate.spec.mjs';
import { takeScreenshot } from '../helpers/screenshot.spec.mjs';
let driver;

// Função de pausa encapsulada
const pause = (duration) => new Promise(resolve => setTimeout(resolve, duration));

describe('Teste de Pagamento', function () {
    this.timeout(30000);

    // metodo de chamada de nomes aleatorios
    const randomName = generateRandomName();
    // metodo de chamada de senhas
    const randomPassword = generateRandomPassword(3);

    before(async function () {
        driver = await defaultGetDriver(); // Chamada para iniciar a função do Driver
        await driver.manage().window().maximize(); // Comando para maximizar Tela
    });

    after(async function () {
        if (driver) { // Certificando que o Driver foi definido antes de encerrar
            //await driver.quit();
        }
    });

    it('Deve permitir selecionar o método de pagamento', async function () {
        await driver.get('https://www.advantageonlineshopping.com/#/');

        await pause(5000); // Pausa de 5 segundos para o carregamento da pagina

        // Iniciar o processo de Compra "Speakers"
        await driver.findElement({ xpath: '//*[@id="speakersImg"]'}).click();

        await pause(2000); // Pausa de 2 segundos para o carregamento da pagina
        
        // Selecionar uma caixa de Som
        await driver.findElement({ xpath: '//*[@id="24"]'}).click();

        await pause(2000); // Pausa de 2 segundos para o carregamento da pagina
                
        // Adicionar no Carrinho
        await driver.findElement({ xpath: '//*[@id="productProperties"]/div[4]/button'}).click();

        await pause(4000); // Pausa de 4 segundos para o carregamento da pagina após a escolha do produto

        // Ver o carrinho
        await driver.findElement({ xpath: '//*[@id="menuCart"]'}).click();
        
        await pause(2000); // Pausa de 2 segundos para o carregamento da pagina

        // Fazer o CheckOut
        await driver.findElement({ xpath: '//*[@id="checkOutButton"]'}).click();

        await pause(2000); // Pausa de 2 segundos para o carregamento da pagina

        // Registro no Site de Compra
        await driver.findElement({ xpath: '//*[@id="registration_btn"]'}).click();

        await pause(2000); // Pausa de 2 segundos para o carregamento da pagina

        // Fazer cadastro
        await driver.findElement({ xpath: '//*[@id="formCover"]/div[1]/div[1]/sec-view[1]/div/input'}).sendKeys(randomName, randomPassword); //Username
        await driver.findElement({ xpath: '//*[@id="formCover"]/div[1]/div[1]/sec-view[2]/div/input'}).sendKeys("nicolastest@nicolastest.com"); //Email
        await driver.findElement({ xpath: '//*[@id="formCover"]/div[1]/div[2]/sec-view[1]/div/input'}).sendKeys("123Senha"); // Password
        await driver.findElement({ xpath: '//*[@id="formCover"]/div[1]/div[2]/sec-view[2]/div/input'}).sendKeys("123Senha"); 
        
        // Terminar Registro
        await driver.findElement({ xpath: '//*[@id="formCover"]/sec-view/div/input'}).click();
        await driver.findElement({ xpath: '//*[@id="register_btn"]'}).click();

        await pause(2000); // Pausa de 2 segundos para o carregamento da pagina

        // Detalhes de Endereço
        await driver.findElement({ xpath: '//*[@id="next_btn"]'}).click();

        // Pagamento
        await driver.findElement({ xpath: '//*[@id="paymentMethod"]/div/div[2]/sec-form/sec-view[1]/div/input'}).sendKeys(randomName);
        await driver.findElement({ xpath: '//*[@id="paymentMethod"]/div/div[2]/sec-form/sec-view[2]/div/input'}).sendKeys("123Senha");
        await driver.findElement({ xpath: '//*[@id="pay_now_btn_SAFEPAY"]'}).click();
        

        await pause(2000); // Pausa de 2 segundos para o carregamento da pagina

        // Tirar Screenshot
        await takeScreenshot(driver);
    });

});
