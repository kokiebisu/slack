import * as b from "../../../global/blocks";

export interface ProfileOptionProps {
  title?: string;
  subtitle?: string;
  state?: string;
  tier?: string;
}

export const ProfileOption: React.FC<ProfileOptionProps> = ({
  title,
  subtitle,
  state,
  tier,
}) => {
  return (
    <b.Box py={1} px={4}>
      <b.Flex>
        <b.Box pr={2}>
          <b.Flex justifyContent="center" alignItems="center">
            <b.Box
              height={35}
              width={35}
              borderRadius={3}
              backgroundColor="blue"
            />
          </b.Flex>
        </b.Box>
        <b.Box>
          <b.Box mb={1}>
            <b.Text
              fontSize={15}
              color="black__light"
              fontFamily="SlackLato-Bold"
            >
              {title}
            </b.Text>
          </b.Box>
          <b.Box>
            <b.Flex>
              <b.Box>
                <b.Text
                  fontFamily="SlackLato-Regular"
                  fontSize={12}
                  color="gray"
                >
                  {subtitle}
                  <b.Span fontFamily="SlackLato-Bold">{state}</b.Span> &nbsp;
                </b.Text>
              </b.Box>
              {state && (
                <b.Box>
                  <b.Text
                    fontFamily="SlackLato-Bold"
                    fontSize={12}
                    color="blue"
                  >
                    Change
                  </b.Text>
                </b.Box>
              )}
            </b.Flex>
          </b.Box>
        </b.Box>
      </b.Flex>
      {tier && (
        <b.Box mt={2}>
          <b.Text fontSize={13} fontFamily="SlackLato-Regular" lineHeight={1.6}>
            Your workspace is currently on the {tier} version of Slack. See
            upgrade options
          </b.Text>
        </b.Box>
      )}
    </b.Box>
  );
};
