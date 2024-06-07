import { describe, it, before, after } from 'mocha';
import * as chai from 'chai';
const { expect } = chai;
import { getDriver as defaultGetDriver } from '../helpers/driver.mjs';
import axios from 'axios';
let driver;

describe('Teste de Pagamento', function () {
    this.timeout(30000);

    before(async function () {
        driver = await defaultGetDriver(); // Chamada para iniciar a função do Driver
        await driver.manage().window().maximize(); // Comando para maximizar Tela
    });

    after(async function () {
        if (driver) { // Certificando que o Driver foi definido antes de encerrar
            // await driver.quit();
        }
    });

    it('Deve permitir selecionar o método de pagamento', async function () {
        await driver.get('https://www.advantageonlineshopping.com/#/');

        await new Promise(resolve => setTimeout(resolve, 5000)); // Pausa de 5 segundos para o carregamento da pagina

        // Iniciar o processo de Compra "Speakers"
        await driver.findElement({ xpath: '//*[@id="speakersImg"]' }).click();
        
        // Selecionar uma caixa de Som
        await driver.findElement({ xpath: '//*[@id="24"]' }).click();
        
        // Seleção de Cor "Preta"
        await driver.findElement({ xpath: '//*[@id="bunny"]' }).click();
        
        // Adicionar no Carrinho
        await driver.findElement({ xpath: 'save_to_cart' }).click();
        
        // Verificar se a opção foi selecionada
        const pixSelected = await driver.findElement({ id: 'id_pix' }).isSelected();
        expect(pixSelected).to.be.true;
    });

    it('Deve receber confirmação de pagamento via PIX e atualizar o status para "Pago"', async function () {
        // Simular pagamento via PIX
        const response = await axios.post('URL_DA_API_DE_PAGAMENTO', {
            chave_pix: 'EXEMPLO_CHAVE_PIX',
            valor: 100.00
        });

        // Verificar se a API respondeu corretamente
        expect(response.status).to.equal(200);

        // Verificar se o status do pagamento foi atualizado para "Pago"
        await driver.get('URL_DO_SEU_APLICATIVO/historico');
        const statusPagamento = await driver.findElement({ id: 'id_status_pagamento' }).getText();
        expect(statusPagamento).to.equal('Pago');
    });
});
