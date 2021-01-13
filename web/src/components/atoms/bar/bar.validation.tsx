import * as React from "react";

// Blocks
import * as b from "../../../global/blocks";

// Util
import {
  weakRegex,
  mediumRegex,
  strongRegex,
  veryStrongRegex,
} from "../../../util/passwordUtil";

export const ValidationBar: React.FC<{ password?: string }> = ({
  password = "pass",
}) => {
  const criterias = [weakRegex, mediumRegex, strongRegex, veryStrongRegex];
  return (
    <b.Box>
      <b.Grid width={1} gridTemplateColumns="1fr 1fr 1fr 1fr" gridColumnGap={2}>
        {criterias.map((criteria, index) => (
          <div key={index}>
            <b.Box
              height={3}
              borderRadius={3}
              backgroundColor={
                password.match(criteria) ? "blue" : "gray__lighter"
              }
            />
          </div>
        ))}
      </b.Grid>
    </b.Box>
  );
};
