


class coreController {
    constructor(localStorageService, $state){
        // this.items = [1, 2, 3, 4, 5, 6, 7];
        // this.selectedItem;
    }

    // getSelectedText() {
    //     if (this.selectedItem !== undefined) {
    //         return "You have selected: Item " + this.selectedItem;
    //     } else {
    //         return "Please select an item";
    //     }
    // }
}

coreController.$inject = [];

angular.module("superApp.core")
    .controller("CoreController", coreController);
