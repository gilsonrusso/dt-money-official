import logoImg from '../../assets/Logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt=""/>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>New transaction</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal/>
          </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
