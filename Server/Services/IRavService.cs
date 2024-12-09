using Entities;
using DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public interface IRavService
    {
        Task<IEnumerable<RavDTO>> GetAllAsync();
        Task<RavDTO> GetByIdAsync(int id);
        Task<RavDTO> GetByNameAsync(string name);
        Task<RavDTO> AddAsync(RavDTO rav);
        Task<RavDTO> UpdateAsync(int id,RavDTO rav);
    }
}
