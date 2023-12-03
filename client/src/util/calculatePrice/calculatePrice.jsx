export const calculatePrice = (state) => 
  state.itemPrice * state.menu +
  (state.shot +
    state.syrups.vanilla +
    state.syrups.hazelnut +
    state.syrups.caramel) *
    600 +
  (state.whipping !== "없음" ? 600 : 0) +
  (state.drizzle !== "없음" ? 600 : 0) +
  (state.milk !== "없음" ? 600 : 0);
