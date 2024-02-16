import { navigateTo } from "../support/page_objects/NavigationPage"
import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })
    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })
    it.only('should submit Inline and Basic form and select tommorow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Helga', "test@test.test")
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatePickerFromToday(1)
        onDatePickerPage.selectCommonDatePickerFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Olga', 'Test')
        onSmartTablePage.updateAgeByFirstName('Olga', '31')
        onSmartTablePage.deleteRowByIndex(1)
    })
})