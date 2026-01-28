import { useMemo, useState } from "react";
import { ValidationError, ApiError } from "@utils/errors";

type Props = {
  onSearch: (stateName: string) => Promise<void>;
};

export function StateSearchForm({ onSearch }: Props) {
  const [value, setValue] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(
    () => value.trim().length > 0 && !busy,
    [value, busy]
  );

  async function submit() {
    setError(null);
    setBusy(true);
    try {
      await onSearch(value);
      setValue("");
    } catch (e) {
      const msg =
        e instanceof ValidationError ||
        e instanceof ApiError ||
        e instanceof Error
          ? e.message
          : "Unexpected error";
      setError(msg);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="formRow">
        <input
          className="input"
          placeholder="Enter US state (e.g., California)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          aria-label="US state name"
        />
        <button className="button" disabled={!canSubmit} onClick={submit}>
          {busy ? "Searching..." : "Search"}
        </button>
      </div>
      {error && <div className="error">{error}</div>}
    </>
  );
}
