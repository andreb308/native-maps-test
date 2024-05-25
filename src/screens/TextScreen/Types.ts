export type MackleProps = {
  status: 200;
  info: {
    lyrics: string;
    title: string;
    image: string;
  };
};
export type AILyricContext =
  | GeminiFetchSuccess
  | GeminiFetchError
  | {
      status: 422;
      message: "Please provide a prompt.";
    };

interface MackleErrorProps {
  status: 500;
  info: {};
}

interface GeminiFetchSuccess {
  status: 200;
  response: {
    candidates: {
      content: {
        parts: {
          text: string;
        }[];
        role: "user" | "model";
      };
      finishReason:
        | "FINISH_REASON_UNSPECIFIED"
        | "STOP"
        | "MAX_TOKENS"
        | "SAFETY"
        | "RECITATION"
        | "OTHER";
      index: number;
      safetyRatings: {
        category: string;
        // https://ai.google.dev/api/rest/v1/HarmCategory?hl=pt-br
        // | "HARM_CATEGORY_SEXUALLY_EXPLICIT"
        // | "HARM_CATEGORY_HATE_SPEECH"
        // | "HARM_CATEGORY_HARASSMENT"
        // | "HARM_CATEGORY_DANGEROUS_CONTENT";
        probability:
          | "HARM_PROBABILITY_UNSPECIFIED"
          | "NEGLIGIBLE"
          | "LOW"
          | "MEDIUM"
          | "HIGH";
      }[];
    }[];
    usageMetadata: {
      promptTokenCount: number;
      candidatesTokenCount: number;
      totalTokenCount: number;
    };
  };
}

interface GeminiFetchError {
  status: 500 | 502;
  error: {
    response: {
      candidates: Array<any>;
      usageMetadata: Object;
    };
  };
  finishReason?:
    | "FINISH_REASON_UNSPECIFIED"
    | "MAX_TOKENS"
    | "SAFETY"
    | "RECITATION"
    | "OTHER";
}
