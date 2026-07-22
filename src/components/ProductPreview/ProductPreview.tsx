import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { HiOutlineVideoCamera } from 'react-icons/hi2'
import { HiSparkles } from 'react-icons/hi2'
import { detectionBoxLayout, type BoxTone } from '../../data/productPreview'
import { media } from '../../styles/breakpoints'

const Panel = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.darkBg};
  border: 1px solid ${({ theme }) => theme.colors.darkBorder};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  box-shadow: 0 30px 80px -20px rgba(5, 12, 26, 0.55), ${({ theme }) => theme.shadow.darkGlow};
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkBorder};
`

const CamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkTextPrimary};

  svg {
    color: ${({ theme }) => theme.colors.brandGlow};
  }
`

const RecDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.danger};
  box-shadow: 0 0 0 0 rgba(255, 92, 108, 0.6);
  animation: rec-pulse 1.6s infinite;

  @keyframes rec-pulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 92, 108, 0.5); }
    70% { box-shadow: 0 0 0 6px rgba(255, 92, 108, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 92, 108, 0); }
  }
`

const Timestamp = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkTextSecondary};
  font-variant-numeric: tabular-nums;
`

const Feed = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  background:
    linear-gradient(180deg, rgba(22, 119, 255, 0.08) 0%, rgba(3, 7, 13, 0) 40%),
    repeating-linear-gradient(90deg, rgba(140, 152, 168, 0.06) 0px, rgba(140, 152, 168, 0.06) 1px, transparent 1px, transparent 64px),
    repeating-linear-gradient(0deg, rgba(140, 152, 168, 0.06) 0px, rgba(140, 152, 168, 0.06) 1px, transparent 1px, transparent 64px),
    linear-gradient(160deg, #0a1524 0%, #050b14 60%, #03070d 100%);
  overflow: hidden;

  ${media.mobile} {
    aspect-ratio: 4 / 3.4;
  }
`

const toneColor = (tone: BoxTone) =>
  ({ brand: '#2F8FFF', success: '#2DD4A7', warning: '#F6B94A', danger: '#FF5C6C' }[tone])

const Box = styled(motion.div)<{ $tone: BoxTone; $top: string; $left: string; $w: string; $h: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  inset-inline-start: ${({ $left }) => $left};
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  border: 1.5px solid ${({ $tone }) => toneColor($tone)};
  border-radius: 6px;
  box-shadow: 0 0 16px -2px ${({ $tone }) => toneColor($tone)}66;
`

const BoxLabel = styled.span<{ $tone: BoxTone }>`
  position: absolute;
  top: -22px;
  inset-inline-start: -1.5px;
  background: ${({ $tone }) => toneColor($tone)};
  color: #03070d;
  font-size: 10.5px;
  font-weight: 700;
  padding: 3px 7px;
  border-radius: 4px;
  white-space: nowrap;

  ${media.mobile} {
    font-size: 9px;
    padding: 2px 5px;
  }
`

const KpiStrip = styled.div`
  position: absolute;
  top: 14px;
  inset-inline-end: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${media.mobile} {
    display: none;
  }
`

const KpiChip = styled.div`
  background: rgba(3, 7, 13, 0.72);
  border: 1px solid ${({ theme }) => theme.colors.darkBorder};
  border-radius: 8px;
  padding: 8px 12px;
  backdrop-filter: blur(6px);

  .value {
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkTextPrimary};
  }
  .label {
    font-size: 10.5px;
    color: ${({ theme }) => theme.colors.darkTextSecondary};
  }
`

const Timeline = styled.div`
  display: flex;
  gap: 22px;
  padding: 16px 18px;
  overflow-x: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkBorder};

  ${media.mobile} {
    padding: 12px 14px;
    gap: 16px;
  }
`

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 108px;
  position: relative;
  padding-inline-start: 14px;
  border-inline-start: 2px solid ${({ theme }) => theme.colors.darkBorder};

  &::before {
    content: '';
    position: absolute;
    inset-inline-start: -5px;
    top: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.brandGlow};
  }

  .time {
    font-size: 11px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.brandGlow};
    font-variant-numeric: tabular-nums;
  }
  .label {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkTextSecondary};
    line-height: 1.4;
  }
`

const AssistantCard = styled(motion.div)`
  margin: 18px;
  position: relative;
  background: rgba(7, 17, 31, 0.92);
  border: 1px solid ${({ theme }) => theme.colors.darkBorder};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 16px 18px;
  backdrop-filter: blur(10px);

  ${media.mobile} {
    margin: 12px;
    padding: 14px;
  }
`

const AssistantHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cyan};
  margin-bottom: 10px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  svg {
    font-size: 14px;
  }
`

const Stack = styled.div`
  display: grid;

  > * {
    grid-area: 1 / 1;
  }
`

const QuestionStack = styled(Stack)`
  margin-bottom: 8px;
`

const Question = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkTextPrimary};

  &[aria-hidden] {
    visibility: hidden;
  }
`

const Answer = styled.p`
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.darkTextSecondary};

  &[aria-hidden] {
    visibility: hidden;
  }
`

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-inline-start: 2px;
  background: currentColor;
  vertical-align: text-bottom;
  animation: blink 0.9s step-end infinite;

  @keyframes blink {
    50% { opacity: 0; }
  }
`

const TypingDots = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 1.6em;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.darkTextSecondary};
    animation: bounce 1.2s infinite ease-in-out;
  }
  span:nth-child(2) { animation-delay: 0.15s; }
  span:nth-child(3) { animation-delay: 0.3s; }

  @keyframes bounce {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
    30% { transform: translateY(-4px); opacity: 1; }
  }
`

type DemoPhase = 'question' | 'thinking' | 'answer' | 'done'

function useAssistantDemo(active: boolean, fullQuestion: string, fullAnswer: string) {
  const [phase, setPhase] = useState<DemoPhase>('question')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    if (!active) return
    let cancelled = false
    const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

    const typeText = async (text: string, onUpdate: (value: string) => void, speed: number) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return
        onUpdate(text.slice(0, i))
        await sleep(speed)
      }
    }

    const loop = async () => {
      while (!cancelled) {
        setPhase('question')
        setQuestion('')
        setAnswer('')
        await typeText(fullQuestion, setQuestion, 32)
        if (cancelled) return

        await sleep(450)
        if (cancelled) return
        setPhase('thinking')

        await sleep(900)
        if (cancelled) return
        setPhase('answer')
        await typeText(fullAnswer, setAnswer, 14)
        if (cancelled) return

        setPhase('done')
        await sleep(3200)
      }
    }

    loop()
    return () => {
      cancelled = true
    }
  }, [active, fullQuestion, fullAnswer])

  return { phase, question, answer }
}

export function ProductPreview() {
  const { t } = useTranslation()
  const cardRef = useRef<HTMLDivElement>(null)
  const isCardInView = useInView(cardRef, { amount: 0.6 })

  const boxLabels = t('productPreview.boxes', { returnObjects: true }) as string[]
  const kpiStats = t('productPreview.kpis', { returnObjects: true }) as { label: string; value: string }[]
  const timelineEvents = t('productPreview.timeline', { returnObjects: true }) as { time: string; label: string }[]
  const fullQuestion = t('productPreview.question')
  const fullAnswer = t('productPreview.answer')

  const { phase, question, answer } = useAssistantDemo(isCardInView, fullQuestion, fullAnswer)

  return (
    <Panel>
      <TopBar>
        <CamInfo>
          <HiOutlineVideoCamera />
          {t('productPreview.camLabel')}
        </CamInfo>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <RecDot />
          <Timestamp>{t('productPreview.live')} · 08:27:41</Timestamp>
        </div>
      </TopBar>

      <Feed>
        {detectionBoxLayout.map((box, i) => (
          <Box
            key={i}
            $tone={box.tone}
            $top={box.top}
            $left={box.left}
            $w={box.width}
            $h={box.height}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: box.delay, ease: 'easeOut' }}
          >
            <BoxLabel $tone={box.tone}>{boxLabels[i]}</BoxLabel>
          </Box>
        ))}

        <KpiStrip>
          {kpiStats.map((kpi) => (
            <KpiChip key={kpi.label}>
              <div className="value">{kpi.value}</div>
              <div className="label">{kpi.label}</div>
            </KpiChip>
          ))}
        </KpiStrip>
      </Feed>

      <Timeline>
        {timelineEvents.map((event) => (
          <TimelineItem key={event.time}>
            <span className="time">{event.time}</span>
            <span className="label">{event.label}</span>
          </TimelineItem>
        ))}
      </Timeline>

      <AssistantCard
        ref={cardRef}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <AssistantHeader>
          <HiSparkles />
          {t('productPreview.assistantHeader')}
        </AssistantHeader>
        <QuestionStack>
          <Question aria-hidden="true">{fullQuestion}</Question>
          <Question>
            {question}
            {phase === 'question' && <Cursor />}
          </Question>
        </QuestionStack>
        <Stack>
          <Answer aria-hidden="true">{fullAnswer}</Answer>
          {phase === 'thinking' && (
            <TypingDots>
              <span />
              <span />
              <span />
            </TypingDots>
          )}
          {phase !== 'thinking' && (
            <Answer>
              {answer}
              {phase === 'answer' && <Cursor />}
            </Answer>
          )}
        </Stack>
      </AssistantCard>
    </Panel>
  )
}
