import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { 
  Utensils, 
  Droplets, 
  Bed, 
  Hand, 
  Thermometer, 
  Toilet, 
  Pill, 
  Heart, 
  Settings, 
  Volume2, 
  Save,
  X,
  RotateCcw,
  Home
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// 预设词汇列表
const PRESET_WORDS = [
  { id: 'eat', text: '吃饭', icon: Utensils, color: '#FF6B6B' },
  { id: 'drink', text: '喝水', icon: Droplets, color: '#4ECDC4' },
  { id: 'tired', text: '我累了', icon: Bed, color: '#95E1D3' },
  { id: 'itchy', text: '身体痒', icon: Hand, color: '#F38181' },
  { id: 'pain', text: '疼', icon: Heart, color: '#FF6B6B' },
  { id: 'hot', text: '热', icon: Thermometer, color: '#F38181' },
  { id: 'cold', text: '冷', icon: Thermometer, color: '#4ECDC4' },
  { id: 'toilet', text: '上厕所', icon: Toilet, color: '#95E1D3' },
  { id: 'medicine', text: '吃药', icon: Pill, color: '#F38181' },
  { id: 'help', text: '需要帮助', icon: Hand, color: '#FF6B6B' },
  { id: 'yes', text: '是', icon: Heart, color: '#4ECDC4' },
  { id: 'no', text: '不是', icon: X, color: '#F38181' },
]

// 默认自定义词汇
const DEFAULT_CUSTOM_WORDS = [
  { id: 'custom1', text: '你好', icon: Heart, color: '#FFB347' },
  { id: 'custom2', text: '谢谢', icon: Heart, color: '#87CEEB' },
  { id: 'custom3', text: '再见', icon: Hand, color: '#DDA0DD' },
  { id: 'custom4', text: '舒服', icon: Bed, color: '#98D8C8' },
]

interface WordItem {
  id: string
  text: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

function App() {
  const [showSettings, setShowSettings] = useState(false)
  const [customWords, setCustomWords] = useState<WordItem[]>(DEFAULT_CUSTOM_WORDS)
  const [editingWords, setEditingWords] = useState<WordItem[]>(DEFAULT_CUSTOM_WORDS)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [lastSpoken, setLastSpoken] = useState<string | null>(null)

  // 从localStorage加载自定义词汇
  useEffect(() => {
    const saved = localStorage.getItem('customWords')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // 恢复icon组件
        const restored = parsed.map((word: any, index: number) => ({
          ...word,
          icon: DEFAULT_CUSTOM_WORDS[index]?.icon || Heart
        }))
        setCustomWords(restored)
        setEditingWords(restored)
      } catch (e) {
        console.error('Failed to parse saved words:', e)
      }
    }
  }, [])

  // 语音播放功能
  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      // 取消之前的语音
      window.speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'zh-CN'
      utterance.rate = 0.8  // 稍慢语速，更清晰
      utterance.pitch = 1
      utterance.volume = 1
      
      utterance.onstart = () => {
        setIsSpeaking(true)
        setLastSpoken(text)
      }
      
      utterance.onend = () => {
        setIsSpeaking(false)
      }
      
      utterance.onerror = () => {
        setIsSpeaking(false)
      }
      
      window.speechSynthesis.speak(utterance)
    } else {
      alert('您的浏览器不支持语音播放功能')
    }
  }, [])

  // 保存自定义词汇
  const saveCustomWords = () => {
    const wordsToSave = editingWords.map(word => ({
      id: word.id,
      text: word.text,
      color: word.color
    }))
    localStorage.setItem('customWords', JSON.stringify(wordsToSave))
    setCustomWords(editingWords)
    setShowSettings(false)
  }

  // 更新编辑中的词汇
  const updateEditingWord = (index: number, newText: string) => {
    const updated = [...editingWords]
    updated[index] = { ...updated[index], text: newText }
    setEditingWords(updated)
  }

  // 重置为默认值
  const resetToDefault = () => {
    setEditingWords(DEFAULT_CUSTOM_WORDS)
  }

  // 渲染按钮
  const renderButton = (word: WordItem, isCustom: boolean = false) => {
    const Icon = word.icon
    const isActive = lastSpoken === word.text && isSpeaking
    
    return (
      <button
        key={word.id}
        onClick={() => speak(word.text)}
        className={`
          relative flex flex-col items-center justify-center
          w-full aspect-square
          rounded-3xl
          border-4 transition-all duration-200
          ${isActive 
            ? 'border-yellow-400 scale-95 shadow-inner' 
            : 'border-white/50 hover:border-white hover:scale-105 shadow-lg'
          }
          ${isCustom ? 'ring-4 ring-dashed ring-yellow-400/50' : ''}
        `}
        style={{ 
          backgroundColor: word.color,
          boxShadow: isActive 
            ? 'inset 0 4px 20px rgba(0,0,0,0.3)' 
            : '0 8px 32px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Icon 
          className="w-16 h-16 md:w-20 md:h-20 mb-3 text-white drop-shadow-md" 
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
        />
        <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
          {word.text}
        </span>
        {isActive && (
          <div className="absolute top-2 right-2">
            <Volume2 className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>
        )}
      </button>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 头部 */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Volume2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                辅助沟通助手
              </h1>
              <p className="text-sm text-slate-500">点击按钮说出需求</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowSettings(true)}
            className="gap-2 text-lg px-6 py-6 rounded-xl border-2 hover:bg-slate-100"
          >
            <Settings className="w-6 h-6" />
            <span className="hidden sm:inline">设置</span>
          </Button>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        {/* 自定义词汇区域 */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-yellow-400 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-slate-700">
              常用词汇 <span className="text-sm font-normal text-slate-500">(可自定义)</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {customWords.map(word => renderButton(word, true))}
          </div>
        </section>

        {/* 预设词汇区域 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-blue-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-slate-700">
              更多需求
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {PRESET_WORDS.map(word => renderButton(word))}
          </div>
        </section>
      </main>

      {/* 设置对话框 */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Settings className="w-6 h-6" />
              自定义常用词汇
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <p className="text-slate-500 text-sm">
              修改下方4个常用词汇，保存后将显示在首页顶部
            </p>
            
            {editingWords.map((word, index) => (
              <div key={word.id} className="space-y-2">
                <Label className="text-lg font-medium">
                  常用词 {index + 1}
                </Label>
                <Input
                  value={word.text}
                  onChange={(e) => updateEditingWord(index, e.target.value)}
                  className="text-lg py-6 px-4"
                  placeholder="输入词语..."
                  maxLength={6}
                />
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={resetToDefault}
                className="flex-1 gap-2 py-6 text-lg"
              >
                <RotateCcw className="w-5 h-5" />
                重置
              </Button>
              <Button
                onClick={saveCustomWords}
                className="flex-1 gap-2 py-6 text-lg bg-blue-600 hover:bg-blue-700"
              >
                <Save className="w-5 h-5" />
                保存
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 底部提示 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-slate-500">
          <Home className="w-5 h-5" />
          <span className="text-sm">点击任意按钮即可语音播放</span>
        </div>
      </footer>

      {/* 底部占位，防止内容被遮挡 */}
      <div className="h-16" />
    </div>
  )
}

export default App
