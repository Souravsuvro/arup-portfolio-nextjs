'use client'

import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from '@/components/ui/LazyMotion'
import { gameQuestions } from '@/data/gameQuestions'
import { GameState } from '@/types'

export function ClimateGameContainer() {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    totalQuestions: 0,
    gameStarted: false,
    gameCompleted: false,
    answers: []
  })

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [questions, setQuestions] = useState(gameQuestions)

  const startGame = (mode: 'full' | 'quick') => {
    const questionCount = mode === 'quick' ? 5 : 12
    const shuffledQuestions = [...gameQuestions].sort(() => Math.random() - 0.5).slice(0, questionCount)
    
    setQuestions(shuffledQuestions)
    setGameState({
      currentQuestion: 0,
      score: 0,
      totalQuestions: questionCount,
      gameStarted: true,
      gameCompleted: false,
      answers: []
    })
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)

    const isCorrect = answerIndex === questions[gameState.currentQuestion].correctAnswer
    setGameState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: [...prev.answers, answerIndex]
    }))
  }

  const nextQuestion = () => {
    if (gameState.currentQuestion + 1 >= gameState.totalQuestions) {
      setGameState(prev => ({ ...prev, gameCompleted: true }))
    } else {
      setGameState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }))
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const resetGame = () => {
    setGameState({
      currentQuestion: 0,
      score: 0,
      totalQuestions: 0,
      gameStarted: false,
      gameCompleted: false,
      answers: []
    })
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const getScoreMessage = () => {
    const percentage = (gameState.score / gameState.totalQuestions) * 100
    if (percentage >= 90) return { message: "Outstanding! Climate Expert! 🌟", color: "text-emerald-400" }
    if (percentage >= 80) return { message: "Excellent work! 🎉", color: "text-blue-400" }
    if (percentage >= 70) return { message: "Good job! 👍", color: "text-green-400" }
    if (percentage >= 60) return { message: "Not bad! Keep learning! 📚", color: "text-yellow-400" }
    return { message: "Keep studying! You can do better! 💪", color: "text-orange-400" }
  }

  if (!gameState.gameStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Climate Knowledge Challenge
        </h1>
        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
          Test your understanding of climate science, environmental issues, and sustainability. 
          Challenge yourself and learn something new!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 max-w-7xl mx-auto">
          <div className="flex flex-col justify-between p-8 lg:p-12 xl:p-16 min-h-[500px] lg:min-h-[600px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-md hover:shadow-lg hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 lg:w-28 lg:h-28 mb-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                <i className="fas fa-play text-white text-2xl lg:text-3xl"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Full Challenge</h3>
              <p className="text-slate-300 mb-8 lg:mb-10 leading-relaxed text-base lg:text-lg">
                Complete 12 questions covering various aspects of climate science and environmental studies.
              </p>
              <ul className="text-sm lg:text-base text-slate-400 space-y-3 lg:space-y-4 mb-auto">
                <li className="flex items-center justify-center lg:justify-start">
                  <i className="fas fa-check text-emerald-400 mr-3"></i>
                  12 comprehensive questions
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <i className="fas fa-check text-emerald-400 mr-3"></i>
                  Multiple difficulty levels
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <i className="fas fa-check text-emerald-400 mr-3"></i>
                  Detailed explanations
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <i className="fas fa-check text-emerald-400 mr-3"></i>
                  ~10 minutes
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-12">
              <button
                onClick={() => startGame('full')}
                className="w-full px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold text-base lg:text-lg rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Start Full Challenge
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 lg:p-12 xl:p-16 min-h-[500px] lg:min-h-[600px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-md hover:shadow-lg hover:border-blue-500/30 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 lg:w-28 lg:h-28 mb-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <i className="fas fa-bolt text-white text-2xl lg:text-3xl"></i>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">Quick Quiz</h3>
              <p className="text-slate-300 mb-8 lg:mb-10 leading-relaxed text-base lg:text-lg">
                A shorter version with 5 randomly selected questions for a quick knowledge check.
              </p>
              <ul className="text-sm lg:text-base text-slate-400 space-y-3 lg:space-y-4 mb-auto">
                <li className="flex items-center justify-center lg:justify-start">
                  <i className="fas fa-check text-blue-400 mr-3"></i>
                  5 random questions
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <i className="fas fa-check text-blue-400 mr-3"></i>
                  Mixed difficulty
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <i className="fas fa-check text-blue-400 mr-3"></i>
                  Quick explanations
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <i className="fas fa-check text-blue-400 mr-3"></i>
                  ~3 minutes
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:mt-12">
              <button
                onClick={() => startGame('quick')}
                className="w-full px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-base lg:text-lg rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Quick Quiz
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl max-w-2xl mx-auto"
        >
          <h4 className="text-lg font-semibold text-emerald-400 mb-3">Topics Covered:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Climate Science', 'Energy', 'Ocean Science', 'Emissions', 'Land Use', 'Policy'].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  if (gameState.gameCompleted) {
    const scoreInfo = getScoreMessage()
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl max-w-2xl mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
            <i className="fas fa-trophy text-white text-3xl"></i>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">Challenge Complete!</h2>
          <p className={`text-2xl font-semibold mb-6 ${scoreInfo.color}`}>
            {scoreInfo.message}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                {gameState.score}/{gameState.totalQuestions}
              </div>
              <div className="text-slate-400">Correct Answers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {Math.round((gameState.score / gameState.totalQuestions) * 100)}%
              </div>
              <div className="text-slate-400">Accuracy</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => startGame('full')}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              <i className="fas fa-redo mr-2"></i>
              Try Again
            </button>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 font-semibold rounded-xl border border-slate-600 transition-all duration-300"
            >
              <i className="fas fa-home mr-2"></i>
              Back to Menu
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  const currentQ = questions[gameState.currentQuestion]
  const progress = ((gameState.currentQuestion + 1) / gameState.totalQuestions) * 100

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-400">
            Question {gameState.currentQuestion + 1} of {gameState.totalQuestions}
          </span>
          <span className="text-sm text-slate-400">
            Score: {gameState.score}/{gameState.currentQuestion + (selectedAnswer !== null ? 1 : 0)}
          </span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={gameState.currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              currentQ.difficulty === 'easy' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : currentQ.difficulty === 'medium'
                ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              {currentQ.difficulty}
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
              {currentQ.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
            {currentQ.question}
          </h3>

          <div className="grid grid-cols-1 gap-4 mb-8" role="radiogroup" aria-labelledby="question-text">
            {currentQ.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left rounded-xl border transition-all duration-300 "
              
              if (selectedAnswer === null) {
                buttonClass += "bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-500/30 text-slate-300"
              } else if (index === currentQ.correctAnswer) {
                buttonClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
              } else if (index === selectedAnswer && index !== currentQ.correctAnswer) {
                buttonClass += "bg-red-500/20 border-red-500/50 text-red-300"
              } else {
                buttonClass += "bg-slate-700/30 border-slate-600/50 text-slate-400"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                  role="radio"
                  aria-checked={selectedAnswer === index}
                  aria-describedby={`option-${index}-feedback`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-sm font-medium">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {selectedAnswer !== null && index === currentQ.correctAnswer && (
                      <i className="fas fa-check text-emerald-400 ml-auto"></i>
                    )}
                    {selectedAnswer === index && index !== currentQ.correctAnswer && (
                      <i className="fas fa-times text-red-400 ml-auto"></i>
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 border border-slate-600/50 p-6 rounded-xl mb-6"
              >
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                  {selectedAnswer === currentQ.correctAnswer ? "Correct! 🎉" : "Not quite right 🤔"}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {showExplanation && (
            <div className="text-center">
              <button
                onClick={nextQuestion}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
              >
                {gameState.currentQuestion + 1 >= gameState.totalQuestions ? 'Finish' : 'Next Question'}
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
