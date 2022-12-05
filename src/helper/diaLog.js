import {Alert} from 'react-native';
import Toast from 'react-native-simple-toast';
import I18n from './i18n'


class Dialog {
  titleDialog: string = 'Alert';
  positiveButtonDialog: string = I18n.t('confirm_button');
  negativeButtonDialog: string = I18n.t('cancel');

  
  showDialog(title: string, message: string, closeButton?: string) {
    return this.showPositiveDialog(title, message, closeButton);
  }

  showDialogMessage(message: string, closeButton?: string) {
    return this.showPositiveDialog(null, message, closeButton);
  }

  showPositiveDialog(
    title: string,
    message: string,
    positiveButton?: string,
  ): Promise {
    return new Promise((resolve) => {
      if (!title) {
        title = this.titleDialog;
      }
      if (!positiveButton) {
        positiveButton = this.positiveButtonDialog;
      }
      setTimeout(() => {
        Alert.alert(
          title,
          message,
          [{text: positiveButton, onPress: () => resolve(positiveButton)}],
          {cancelable: false},
        );
      }, 100);
    });
  }

  showConfirmDialog(
    title: string,
    message: string,
    positiveButton?: string,
    negativeButton?: string,
  ): Promise {
    return new Promise((resolve, reject) => {
      if (!title) {
        title = this.titleDialog;
      }
      if (!positiveButton) {
        positiveButton = this.positiveButtonDialog;
      }
      if (!negativeButton) {
        negativeButton = this.negativeButtonDialog;
      }
      setTimeout(() => {
        Alert.alert(
          title,
          message,
          [
            {text: positiveButton, onPress: () => resolve(positiveButton)},
            {
              text: negativeButton,
              onPress: () => reject(negativeButton),
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      }, 100);
    });
  }

  showToastMessage(message, duration) {
    duration || Toast.SHORT;

    return Toast.show(message, duration);
  }

}

let diaLog = new Dialog();
export default diaLog;
