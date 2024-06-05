# Nicolas Andrade - Desenvolvimento dos Casos de Testes, aqui um exemplo elaborado de como fosse um card no JIRA. 


# 1. Caso de Teste 1: Selecionar Pix como metodo de pagamento 
# ID: 
    SR-01

# Descrição:
    Verificar se o consumidor pode selecionar o metodo de pagamento Pix na tela de Checkout.

# Pré-condição: 
    O consumidor deve ter uma divida disponivel para negociação.

# Passos de execução:
- Navegar ate a tela de negociação de divida.
- Selecionar uma divida para negociar.
- Navegar ate a tela de Checkout.
- Selecionar o metodo de pagamento Pix.

# Dados de entrada: 
    Não aplicável.

# Critérios de aceitação:
- O metodo de pagamento Pix deve estar disponivel para seleção.
- O consumidor deve conseguir selecionar o metodo de pagamento Pix sem erros.

-----------------------------------------------------------------------------------

# 2. Caso de Teste 2: Selecionar parcelamento Pix
# ID: 
    SR-02

# Descrição:
    Verificar se o consumidor deve ter selecionado metodo de pagamento Pix na tela de Checkout.

# Pré-condição: 
    O consumidor deve ter selecionado o metodo de pagamento Pix na tela de Checkout.

# Passos de execução:
- Navegar ate a tela de parcelamento.
- Selecionar a opção de parcelamento Pix.
- Confirmar a sseleção.

# Dados de entrada: 
    Quantidade de parcelas.

# Critérios de aceitação:
- O consumidor deve conseguir selecionar a opção de parcelamento Pix.
- O sistema deve refletir a seleção corretamente sem erros.

-----------------------------------------------------------------------------------

# 3. Caso de Teste 3: Selecionar data de vencimento para Pix
# ID: 
    SR-03

# Descrição: 
    Verificar se o consumidor pode selecionar uma data de vencimento para o parcelamento Pix.

# Pré-condição: 
    O consumidor deve ter selecionado o parcelamnento Pix.

# Passos de execução:
- Navegar ate a tela de datas de vencimento.
- Selecionar uma data de vencimento.
- Confirmar a sseleção.

# Dados de entrada: 
    Data de vencimento.

# Critérios de aceitação:
- O consumidor deve conseguir selecionar uma data de vencimento.
- O sistema deve refletir a seleção corretamente sem erros.

-----------------------------------------------------------------------------------

# 4. Caso de Teste 4: Exibição da chave Pix e instruções
# ID: 
    SR-04

# Descrição: 
    Verificar se a chave Pix é exibida corretamente e se as instruções de pagamento são claras apos o fechamento do acordo.

# Pré-condição: 
    O consumidor deve ter fechado o acordo selecionando o Pix como metodo de pagamento.

# Passos de execução:
- Fechar o acordo selecionando o Pix como metodo de pagamento.
- Verificar a exibição da chave Pix.
- Verificar a clareza das instruções de pagamento.

# Dados de entrada: 
    Não aplicavel.

# Critérios de aceitação:
- A chave Pix deve ser exibida corretamente.
- As instruções de pagamento devem ser claras e compreensiveis.

-----------------------------------------------------------------------------------

# 5. Caso de Teste 5: Confirmação de pagamento por Pix
# ID: 
    SR-05

# Descrição: 
    Verificar se o sistema recebe a confirmação de pagamento via Pix e atualiza o status para "PAGO".

# Pré-condição: 
    O consumidor deve ter realizado o pagamento via Pix.

# Passos de execução:
- Realizar o pagamento via Pix.
- Verificar se o sistema recebe a confirmação de pagamento.
- Verificar se o Status do pagamento é atualizado para "PAGO".

# Dados de entrada: 
    Informação de Pagamento.

# Critérios de aceitação:
- O sistema deve receber a confirmação de pagamento.
- O status de pagamento deve ser atualizado para "PAGO".

-----------------------------------------------------------------------------------

# 6. Caso de Teste 6: Notificação ao consumidor após pagamento
# ID: 
    SR-06

# Descrição: 
    Verificar se o consumidor recebe uma confirmação na tela e por e-mail apos a realização do pagamento.

# Pré-condição: 
    O consumidor deve ter realizado o pagamento via Pix.

# Passos de execução:
- Realizar o pagamento via Pix.
- Verificar a confirmação na tela.
- Verificar o recebimento do e-mail de confirmação.

# Dados de entrada: 
    Informação de pagamento; enderenço de e-mail.

# Critérios de aceitação:
- O consumidor deve ver uma confirmação na tela apos o pagamento.
- O consumidor deve receber um e-mail de confirmação apos o pagamento.

-----------------------------------------------------------------------------------

# 7. Caso de Teste 6: Visualização do histórico de pagamentos
# ID: 
    SR-07

# Descrição: 
    Verificar se o pagamento realizado via Pix aparece no historico de pagamentos com o status atualizado.

# Pré-condição: 
    O consumidor deve ter realizado e confirmado o pagamento via Pix.

# Passos de execução:
- Realizar o pagamento via Pix.
- Navegar ate a tela de historico de pagamentos.
- Verificar se o pagamento aparece no historico com o status atualizado.

# Dados de entrada: 
    Informação de pagamento.

# Critérios de aceitação:
- O pagamento realizado via Pix deve aparecer no historico.
- O status do pagamento no historico dever ser atualizado para "PAGO".

-----------------------------------------------------------------------------------

# 8. Caso de Teste 8: Seleção de boleto como método de pagamento
# ID: 
    SR-08

# Descrição: 
    Garantir que a funcionalidade existente de pagamento por boleto não seja afetada.

# Pré-condição: 
    O consumidor deve ter uma divida disponivel para negociação.

# Passos de execução:
- Navegar ate a tela de negociação de divida.
- Selecionar uma divida para negociar.
- Navegar ate a tela de Checkout.
- Selecionar o metodo de pagamento boleto.
- Verificar a seleção do metodo de pagamento boleto.

# Dados de entrada: 
    Não Aplicavel.

# Critérios de aceitação:
- O metodo de pagamento boleto deve estar disponivel para seleção.
- O consumidor deve conseguir selecionar o metodo de pagamento boleto sem erros.

-----------------------------------------------------------------------------------

# 9. Caso de Teste 9: Parcialmente parcelado habilitado
# ID: 
    SR-09

# Descrição: 
    Verificar se a opção de pagamento parcelado é habilitada corretamente de acordo com as regras do parceiro/consumidor.

# Pré-condição: 
    O consumidor deve ter selecionado o metodo de pagamento Pix na tela de checkout.

# Passos de execução:
- Navegar ate a tela de parcelamento.
- Verificar as opções de parcelamento disponiveis.
- Confirmar a seleção de parcelamento.

# Dados de entrada: 
    Regras de parcelamento do parceiro/consumidor.

# Critérios de aceitação:
- As opções de parcelamento devem ser exibidas conforme as regras do parceiro/consumidor.
- O consumidor deve conseguir selecionar a opção de parcelamento corretamente.

-----------------------------------------------------------------------------------

# 10. Caso de Teste 10: Integração com API de pagamento Pix [naoAutomatizavel]
# ID: 
    SR-10

# Descrição: 
    Verificar se a integração com a API do provedor de serviços de pagamento que oferece suporte ao Pix esta funcionando corretamente.

# Pré-condição: 
    O sistema deve estar configurado para integrar com a API de pagamento Pix.

# Passos de execução:
- Realizar um pagamento de teste via Pix.
- Verificar se a API de pagamento responde corretamente.
- Verificar se o Status do pagamento é atualizado no sistema.

# Dados de entrada: 
    Dados de pagamento de teste.

# Critérios de aceitação:
- A API de pagamento deve responder corretamente ao pagamento.
- O sistema deve atualizar o status do pagamento corretamente.

-----------------------------------------------------------------------------------