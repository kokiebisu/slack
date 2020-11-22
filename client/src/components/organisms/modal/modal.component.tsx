import React from 'react';

/**
 * Components
 */
import { LaunchModal } from './modal.launch';

/**
 * Props
 */
import { ModalProps } from './props';

export const Modal: React.FC<ModalProps> = ({ type = 'launch', ...props }) => {
  const types = {
    launch: <LaunchModal {...props} />,
  };
  return types[type];
};
