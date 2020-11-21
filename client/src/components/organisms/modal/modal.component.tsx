import React from 'react';
import { LaunchModal } from './modal.launch';
import { ModalProps } from './props';

export const Modal: React.FC<ModalProps> = ({ type = 'launch', ...props }) => {
  const types = {
    launch: <LaunchModal {...props} />,
  };
  return types[type];
};
