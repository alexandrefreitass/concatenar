## Google Sheets Data Concatenation Script

<div align="center">
    <img src="https://github.com/alexandrefreitass/concatenar/assets/109884524/28dad678-b0b2-407a-8abe-d6648ef2cd0b" />
</div>

Este repositório contém um script do Google Apps Script que automatiza a concatenação de dados em uma planilha do Google Sheets, especificamente na planilha chamada "EFETIVO". O script é acionado por mudanças na célula "C7", onde uma caixa de seleção controla a execução das funções de concatenação e limpeza de dados.

### Funcionalidades

- **Concatenação Automática**: Ao marcar a caixa de seleção em "C7", o script concatena dados de várias colunas conforme especificado e insere o resultado em uma célula designada, facilitando a cópia dos dados concatenados.
- **Limpeza Automática**: Ao desmarcar a caixa de seleção, o conteúdo da célula concatenada é automaticamente limpo, evitando a retenção de dados desatualizados.

### Como Funciona

O script monitora a edição de uma caixa de seleção específica na célula "C7" da planilha "EFETIVO". Dependendo do estado da caixa (marcada ou desmarcada), o script executa uma das seguintes ações:
- **Concat**: Concatena informações das células "B6" até "F6" e coloca o resultado formatado na célula "D7".
- **ClearCell**: Limpa o conteúdo da célula "D7" quando a caixa de seleção é desmarcada.

### Código

**Acesso ao Dashboard**: O dashboard pode ser acessado através de [este link](https://docs.google.com/spreadsheets/d/1ImvFMBpoUf64qK2S4ObL1zB8vd47DLx-K73XluyV2mc/edit#gid=712832960).

### Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/alexandrefreitass/concatenar/blob/master/LICENSE) para mais detalhes.