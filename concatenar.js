function onEdit(e) {
    // Utiliza o evento para verificar a célula editada diretamente
    if (e.range.getA1Notation() === "C7" && e.source.getSheetName() === "EFETIVO") {
      var isChecked = e.range.isChecked();  // Corrigido para usar e.range
      if (isChecked) {
        // Execute uma ação quando a caixa de seleção for marcada
        concat();
      } else {
        // Execute uma ação quando a caixa de seleção for desmarcada
        clearCell();  // Corrigido para Logger.log
      }
    }
  }
  
  function concat() {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws1 = ss.getSheetByName("EFETIVO");
  
    ws1.getRange("D7:F7").clearContent();
    Logger.log("Conteúdo de D7 até F7 limpo");  // Corrigido o log
  
    let dataRange = ws1.getRange("B6:F6");  // Ajustado para pegar apenas a linha 6
    let dataVal = dataRange.getValues();
    Logger.log(dataVal);
  
    // Mapeando os dados diretamente sem função auxiliar
    let dataArr = dataVal.map(function(row) {
      return [`${row[0]} ${row[1]}-${row[2]} ${row[4]}`];
    });
  
    // Corrigido para garantir que a matriz seja compatível com setValues
    ws1.getRange("D7").setValues(dataArr);  // Corrigido para inserir a partir de D7
  }
  
  function clearCell() {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws1 = ss.getSheetByName("EFETIVO");
    ws1.getRange("D7").clearContent();  // Limpa o conteúdo de D7
    Logger.log("Conteúdo de D7 limpo quando desmarcado");  // Log para indicar a limpeza
  }