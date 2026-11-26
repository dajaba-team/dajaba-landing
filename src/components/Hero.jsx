import styled, { keyframes } from "styled-components";
import bearTelescope from "../assets/bear-telescope.png";
import { HERO, LINKS, PROJECT_LABEL } from "../data/content";
import MultiLine from "./common/MultiLine";
import { Container } from "./common/styles";
import FlowGraph from "./FlowGraph";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: none; }
`;

const Wrap = styled.section`
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
`;

const Inner = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding-top: 88px;
    padding-bottom: 72px;
`;

const Copy = styled.div`
    flex: 1 1 520px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    > * {
        animation: ${fadeUp} 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both;
    }

    > *:nth-child(2) {
        animation-delay: 0.1s;
    }

    > *:nth-child(3) {
        animation-delay: 0.2s;
    }

    > *:nth-child(4) {
        animation-delay: 0.3s;
    }

    @media (prefers-reduced-motion: reduce) {
        > * {
            animation: none;
        }
    }
`;

const Label = styled.span`
    align-self: flex-start;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 999px;
    padding: 6px 14px;
    font-size: 14px;
`;

const Heading = styled.h1`
    font-size: 52px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -1.5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 34px;
    }
`;

const Description = styled.p`
    font-size: 18px;
    line-height: 1.75;
    max-width: 600px;
    opacity: 0.95;
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
`;

const PrimaryButton = styled.a`
    display: inline-flex;
    align-items: center;
    min-height: 48px;
    padding: 0 26px;
    border-radius: 999px;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.primary};
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

const GhostButton = styled(PrimaryButton)`
    background: transparent;
    border: 1.5px solid ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.white};

    &:hover {
        color: ${({ theme }) => theme.color.white};
        background: rgba(255, 255, 255, 0.12);
    }
`;

const Visual = styled.div`
    position: relative;
    flex: 0 1 440px;
    width: 440px;
    max-width: 100%;
`;

const Character = styled.img`
    position: absolute;
    right: -28px;
    bottom: -72px;
    width: 50%;
    height: auto;
    animation: ${float} 4s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const Caption = styled.p`
    margin-top: 8px;
    font-size: 13px;
    opacity: 0.8;
`;

export default function Hero() {
    return (
        <Wrap id="top">
            <Inner>
                <Copy>
                    <Label>{PROJECT_LABEL}</Label>
                    <Heading>
                        <MultiLine lines={HERO.title} />
                    </Heading>
                    <Description>{HERO.description}</Description>
                    <Actions>
                        <PrimaryButton href="#overview">
                            {HERO.primaryAction}
                        </PrimaryButton>
                        <GhostButton
                            href={LINKS.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub 보러 가기
                        </GhostButton>
                    </Actions>
                </Copy>
                <Visual>
                    <FlowGraph caption={HERO.flowCaption} />
                    <Caption>{HERO.flowCaption}</Caption>
                    <Character
                        src={bearTelescope}
                        alt="망원경을 보는 신한 캐릭터"
                        width="444"
                        height="465"
                    />
                </Visual>
            </Inner>
        </Wrap>
    );
}
