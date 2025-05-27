interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactForm(formData: ContactFormData): Promise<void> {
  // In a real application, this would send the data to your backend API
  // For now, we'll simulate a successful API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form data submitted:", formData)
      resolve()
    }, 1000)
  })
}
