import { SignInModal, SignUpModal } from "@/features/account";

const modalType = {
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
  FILTER: "filter",
  PASSWORD: "password",
};

const getSignInModal = (payload) => {
  return {
    ...payload,
    type: modalType.SIGN_IN,
  };
};

const getSignUpModal = (payload) => {
  return {
    ...payload,
    type: modalType.SIGN_UP,
  };
};

const getFilterModal = (payload) => {
  return {
    ...payload,
    type: modalType.SIGN_IN,
  };
};

const reducer = (state, modal) => {
  const newState = {
    ...state,
    isOpen: modal.isOpen,
  };

  switch (modal.type) {
    case modalType.SIGN_IN:
      return {
        ...newState,
        renderModal: () => <SignInModal animation={modal?.animation} />,
      };
    case modalType.SIGN_UP:
      return {
        ...newState,
        isOpen: modal.isOpen,
        renderModal: () => <SignUpModal animation={modal?.animation} />,
      };
    case modalType.FILTER:
      break;
    default:
      throw new Error("Invalid Modal Type");
  }
};

export { reducer, modalType, getSignInModal, getSignUpModal, getFilterModal };
