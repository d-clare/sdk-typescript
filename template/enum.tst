${
    using System.Text.RegularExpressions;
    using Typewriter.Extensions.Types;
    using Typewriter.VisualStudio;
    
    static ILog log;
    static string directory = "enums";
    static List<string> exportedFiles = [];

    Template(Settings settings)
    {
      settings
          .IncludeProject("DClare.Sdk")
          .DisableUtf8BomGeneration()
          .OutputFilenameFactory = (file) => $"..\\src\\{directory}\\{GetFileName(file, ".ts")}";
          
      settings.PartialRenderingMode = PartialRenderingMode.Combined;
      log = settings.Log;
    }

    string ToKebabCase(string typeName)
    {
      return Regex.Replace(typeName, "(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])", "-$1", RegexOptions.Compiled)
                   .Trim().ToLower();
    }

    string GetFileName(File file, string extention = "")
    {
        return ToKebabCase(file.Name).Replace(".cs", extention);
    }

    bool IsStaticEnum(Class c)
    {
        return c.IsStatic &&
            c.Name != "IServiceCollectionExtensions" &&
            !c.FullName.StartsWith("DClare.Sdk.Models");
    }

    System.IO.DirectoryInfo GetSrcDirectory(File file)
    {
      System.IO.DirectoryInfo directory = new System.IO.FileInfo(file.FullName).Directory;
      while (directory.Name != "submodules" && directory.Parent != null)
      {
        directory = directory.Parent;
      }
      return directory;
    }

    void BuildIndex(Class c)
    {
        var file = (File)c.Parent;
        var filePath = $"./{GetFileName(file)}";
        if (exportedFiles.Contains(filePath)) return;
        var exports = $"export {{ { String.Join(",", file.Classes.Select(cls => cls.Name)) } }} from '{filePath}';";
        string indexPath = System.IO.Path.Combine(new string[] {
            GetSrcDirectory(file).FullName,
            "..\\src",
            directory,
            "index.ts"
        });
        using (var stream = System.IO.File.Open(indexPath, exportedFiles.Count == 0 ? System.IO.FileMode.Create : System.IO.FileMode.Append, System.IO.FileAccess.Write, System.IO.FileShare.Read))
        {
            using (var writer = new System.IO.StreamWriter(stream))
            {
                writer.WriteLine(exports);
            }
        }
        exportedFiles.Add(filePath);
    }

    string Export(Class c)
    {
        return $"export enum {c.Name}";
    }

    string ConstantValue(Constant constant)
    {
        if (constant.Type == "string") return $"`{constant.Value}`";
        return $"{constant.Value}";
    }

}/*
 * Copyright © 2025-Present The DClare Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 

 //!\ This file has been generated, any modification will be lost /!\\


$Classes($IsStaticEnum)[$BuildIndex$Export{$Constants[
  $Name = $ConstantValue,]
}]