import openai
openai.api_key = "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"

def generate_search_query(prompt):
    model_engine = "text-davinci-002"
    prompt = "Search for legal cases on PKULaw related to: " + prompt
    completions = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.7,
    )
    message = completions.choices[0].text.strip()
    return message