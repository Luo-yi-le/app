import FastClick from 'fastclick';

FastClick.prototype.focus = (targetElement: any) => {
    let length: any;
    if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
        length = targetElement.value.length;
        targetElement.focus();
        targetElement.setSelectionRange(length, length);
    } else {

        targetElement.focus();
    }
}
FastClick['attach'](document.body);
// FastClick.attach(document.body);