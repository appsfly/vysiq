export type BoxTone = 'brand' | 'success' | 'warning' | 'danger'

export interface DetectionBoxLayout {
  tone: BoxTone
  top: string
  left: string
  width: string
  height: string
  delay: number
}

export const detectionBoxLayout: DetectionBoxLayout[] = [
  { tone: 'brand', top: '30%', left: '10%', width: '16%', height: '38%', delay: 0.3 },
  { tone: 'danger', top: '24%', left: '58%', width: '15%', height: '40%', delay: 0.6 },
  { tone: 'warning', top: '58%', left: '34%', width: '26%', height: '22%', delay: 0.9 },
  { tone: 'brand', top: '8%', left: '38%', width: '17%', height: '20%', delay: 1.2 },
]
