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
  position: "fixed",
  zIndex: 1300,
  inset: 0,
});

const ModalContainer = styled("div", {
  height: "100vh",
  width: "100vw",
  backgroundColor: "$sand",
  overflowY: "scroll",
  //display: "flex",
  //justifyContent: "center",
  //alignItems: "center",
});

export default function Modal({ isOpen, setIsOpen, children }) {
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
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
        <ModalContainer onKeyDown={onContainerKeyDown} tabIndex={-1}>
          <Container size="tight" css={{ backgroundColor: "$sand", padding: "$8 $10"}}>
            {children}
          </Container>
        </ModalContainer>
      </ModalRoot>
    </Portal>
  ) : null
}
