const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const getDriver = require('../helpers/driver');
const axios = require('axios');

let driver;

describe('PIX Payment Tests', function () {
    this.timeout(30000);

    before(async function () {
        driver = getDriver();
    });

    after(async function () {
        await driver.quit();
    });

    it('Deve permitir selecionar o método de pagamento PIX', async function () {
        await driver.get('URL_DO_SEU_APLICATIVO');

        // Navegar até a tela de negociação de dívida
        await driver.findElement({ id: 'id_do_botao_negociar' }).click();
        
        // Selecionar uma dívida para negociar
        await driver.findElement({ id: 'id_da_divida' }).click();
        
        // Navegar até a tela de checkout
        await driver.findElement({ id: 'id_do_checkout' }).click();
        
        // Selecionar o método de pagamento PIX
        await driver.findElement({ id: 'id_pix' }).click();
        
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
