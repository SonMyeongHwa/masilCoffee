import { ROUTES } from '../router/Routes';

const RedColorPage = [
  ROUTES.RECIPE.path,
  ROUTES.ORDER.path,
  ROUTES.PAYMENT.path,
  ROUTES.PAYMENTDONE.path,
  ROUTES.RECIPEVIEW.path,
  ROUTES.RECIPEWRITE.path,
  ROUTES.RECIPE.path,
];

function IncludeRedPage(location) {
  const includeBoolean = RedColorPage.includes(location)
  

  return includeBoolean;
}

export default IncludeRedPage
