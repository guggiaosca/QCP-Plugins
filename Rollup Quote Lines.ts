/**
 * This method is called by the calculator before calculation begins, but after formula fields have been evaluated.
 * @param {QuoteModel} quoteModel JS representation of the quote being evaluated
 * @param {QuoteLineModel[]} quoteLineModels An array containing JS representations of all lines in the quote
 * @returns {Promise}
 */
export function onBeforeCalculate(quoteModel, quoteLineModels) {
  return new Promise((resolve, reject) => {
    //Loop all Quote Lines
    quoteLineModels.forEach((quoteLine) => {
      //Loop all components. If there aren't components, it is not going to execute the code below
      quoteLine.components.forEach(component => {
        //accumulate the component quantity into the parent quote line custom field
        quoteLine.record.Your_Custom_Field__c += component.record.SBQQ__Quantity__c;
      });
    });
    resolve();
  });
}
