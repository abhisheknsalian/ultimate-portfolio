"use client";

import { useCallback } from "react";

import { executePortfolioAction } from "../controllers/portfolio-controller";
import { PortfolioAction } from "../actions/portfolio-actions";

export function usePortfolioActions() {
  const execute = useCallback(
    (action: PortfolioAction) => {
      executePortfolioAction(action);
    },
    []
  );

  return {
    execute,
  };
}