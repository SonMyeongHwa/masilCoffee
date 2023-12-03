export function getOriginPrice(menu, itemName) {
    return menu.find(item => item.name === itemName);
}