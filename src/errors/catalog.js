const Errors = {
    CAR_01: 'No research paper available',
    CAR_02: 'Research paper is not found',
    CAR_03: 'Research paper already exist',
    CAR_04: 'Research paper id is required',
    CAR_05: 'Research paper name is required',
    CAR_06: 'Research paper price is required',
    CAR_07: 'Research paper description is required'
}
handleCatalogErrors = (code, status, field) => {
    return {
      status,
      field,
      code: code,
      message: Errors[code],
    };
  };
  
  module.exports = handleCatalogErrors;