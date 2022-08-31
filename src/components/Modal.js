import React, { useCallback, useState } from "react"
import { Cross1Icon } from "@radix-ui/react-icons";
import { styled, Button, Box, Container } from "@cabindao/topo"
import { Portal } from "react-portal";

const ModalBackdrop = styled("div", {
  position: "fixed",
  backgroundColor: "#32484180",
  zIndex: -1,
  inset: 0,
});

const ModalRoot = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  zIndex: 1300,
  inset: 0,
});

const ModalContainer = styled("div", {
  position: "relative",
  height: "95vh",
  width: "95vw",
  backgroundColor: "$sand",
  overflowY: "scroll",
});

const CloseButton = styled(Button, {
  position: "absolute",
  top: 0,
  right: 0
})

export default function Modal({ isOpen, setIsOpen, children }) {
  const close = useCallback(() => {
    console.log("close");
    setIsOpen(false)
  }, [setIsOpen] );
  const onContainerKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  return isOpen ? (
    <Portal>
      <ModalRoot>
        <ModalBackdrop />
        <ModalContainer onKeyDown={onContainerKeyDown} tabIndex={-1}>
          <CloseButton tone="wheat" rightIcon={<Cross1Icon />} onClick={close}/>
          <Container size="tight" css={{ backgroundColor: "$sand", padding: "$8 $10"}}>
            {children}
          </Container>
        </ModalContainer>
      </ModalRoot>
    </Portal>
  ) : null
}
