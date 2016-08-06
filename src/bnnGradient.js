const getParam = require('./getParam.js');
const addProperty = require('./addProperty.js');
const removeProperty = require('./removeProperty.js');

const bnnGradient = (declarations) => {

  declarations.forEach((declaration, index) => {

    if (declaration.property === 'bnn-gradient') {

      removeProperty(declarations, index);

      const propertyColor1 = getParam(declaration.value, 0);
      const propertyColor2 = getParam(declaration.value, 1);
      const propertyDirection = getParam(declaration.value, 2);

      const Gradientdirection = (propertyDirection === 'horizontal')
        ? 'to left, '
        : 'to bottom, ';

      const linearGradient = 'linear-gradient(' + Gradientdirection +
        propertyColor1 + ', ' + propertyColor2 + ')';

      addProperty(declarations, index, 'background-image', linearGradient);

    }

  });

};

module.exports = bnnGradient;
