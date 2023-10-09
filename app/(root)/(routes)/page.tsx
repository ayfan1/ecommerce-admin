"use client";

import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

export default function Home() {
  const onOpen = useStoreModal(({ onOpen }) => onOpen);
  const isOpen = useStoreModal(({ isOpen }) => isOpen);

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return null;
}
