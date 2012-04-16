/*
 * Copyright 2000-2012 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created with IntelliJ IDEA.
 * User: Natalia.Ukhorskaya
 * Date: 4/5/12
 * Time: 4:32 PM
 */


function changeConfiguration(mode) {
    configurationManager.updateConfiguration(mode);
}

function setEditorValue(text) {
    var ex = new Example();
    ex.text = text;
    editor.loadExampleOrProgram(true, ex);
}

function setLogin() {
    var ex = new Example();
    ex.text = "fun main(){}";
    editor.loadExampleOrProgram(true, ex);
    var userName = "[\"Natalia Ukhorskaya\"]";
    loginProvider.fire("login", true, userName);
}