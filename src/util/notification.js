import {
  error as errorNotification,
  info as infoNotification,
  warning as wanrningNotification
} from 'react-tube-kit';

export const info = text => {
  infoNotification(text);
};

export const warning = text => {
  wanrningNotification(text);
};

export const error = text => {
  errorNotification(text);
};
