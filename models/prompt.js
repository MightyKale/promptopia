import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    prompt: {
        type: String,
        required: [true, 'A prompt is Required']
    },
    tag: {
        type: String,
        required: [true, 'A tag is Required']
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt
