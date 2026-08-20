import {
  PortfolioAction,
  PortfolioActionType,
} from "../actions/portfolio-actions";

export function executePortfolioAction(
  action: PortfolioAction
) {
  switch (action.type) {
    case PortfolioActionType.SCROLL: {
      if (!action.target) return;

      const section = document.getElementById(
        action.target
      );

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      break;
    }

    case PortfolioActionType.DOWNLOAD_RESUME: {
      window.open("/resume.pdf", "_blank");
      break;
    }

    case PortfolioActionType.OPEN_GITHUB: {
      window.open(
        "https://github.com/abhisheknsalian",
        "_blank"
      );

      break;
    }

    case PortfolioActionType.OPEN_LINKEDIN: {
      window.open(
        "https://linkedin.com/in/abhisheknsalian",
        "_blank"
      );

      break;
    }

    case PortfolioActionType.OPEN_CONTACT: {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
        });

      break;
    }

    default:
      break;
  }
}